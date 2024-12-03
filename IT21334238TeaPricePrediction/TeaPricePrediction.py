import pandas as pd
from prophet import Prophet
import numpy as np
from datetime import datetime
import matplotlib.pyplot as plt
import os
import joblib
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

class TeaPriceForecaster:
    def __init__(self, model_dir='prophet_models'):
        self.models = {}
        self.regions = None
        self.model_dir = model_dir
        self.metrics = {}
        os.makedirs(model_dir, exist_ok=True)

    def prepare_data(self, df, region):
        region_data = df[df['Tea Region '] == region].copy()
        prophet_df = pd.DataFrame({
            'ds': pd.to_datetime(region_data['Year'] + '-01'),
            'y': region_data['Month Price (Rs)']
        })
        return prophet_df

    def train(self, df, test_size=12):
        self.regions = df['Tea Region '].unique()

        for region in self.regions:
            prophet_df = self.prepare_data(df, region)

            # Split data into train and test sets
            train_df = prophet_df[:-test_size]
            test_df = prophet_df[-test_size:]

            model = Prophet(yearly_seasonality=True,
                          weekly_seasonality=False,
                          daily_seasonality=False)
            model.fit(train_df)

            # Calculate metrics on test set
            forecast = model.predict(test_df)
            self.metrics[region] = self.calculate_metrics(test_df['y'].values,
                                                        forecast['yhat'].values)

            # Retrain on full dataset for future predictions
            model = Prophet(yearly_seasonality=True,
                          weekly_seasonality=False,
                          daily_seasonality=False)
            model.fit(prophet_df)
            self.models[region] = model

            model_path = os.path.join(self.model_dir, f'{region.lower()}_model.joblib')
            joblib.dump(model, model_path)

    def calculate_metrics(self, y_true, y_pred):
        return {
            'MAE': mean_absolute_error(y_true, y_pred),
            'RMSE': np.sqrt(mean_squared_error(y_true, y_pred)),
            'MAPE': np.mean(np.abs((y_true - y_pred) / y_true)) * 100
        }

    def get_metrics(self):
        return pd.DataFrame(self.metrics).round(2)

    def predict(self, periods=12):
        forecasts = {}
        for region, model in self.models.items():
            future = model.make_future_dataframe(periods=periods, freq='M')
            forecast = model.predict(future)
            forecasts[region] = forecast
        return forecasts

    def plot_forecasts(self, forecasts):
        n_regions = len(self.regions)
        fig, axes = plt.subplots(n_regions, 1, figsize=(12, 5*n_regions))
        if n_regions == 1:
            axes = [axes]

        for ax, region in zip(axes, self.regions):
            self.models[region].plot(forecasts[region], ax=ax)
            ax.set_title(f'Tea Price Forecast for {region}')
            ax.set_xlabel('Date')
            ax.set_ylabel('Price (Rs)')

        plt.tight_layout()
        return fig

    @classmethod
    def load_model(cls, region, model_dir='prophet_models'):
        model_path = os.path.join(model_dir, f'{region.lower()}_model.joblib')
        return joblib.load(model_path)


def main():
    # Load data
    df = dataset

    # Initialize and train forecaster
    forecaster = TeaPriceForecaster(model_dir="/content/drive/MyDrive/Tea_Prediction")
    forecaster.train(df, test_size=12)  # Use last 12 months as test set

    # Print model evaluation metrics
    print("\nModel Evaluation Metrics:")
    print(forecaster.get_metrics())
    metrics_df = forecaster.get_metrics()
    # Make predictions
    forecasts = forecaster.predict(periods=12)

    # Plot results
    fig = forecaster.plot_forecasts(forecasts)
    plt.show()

    # Print predictions for next 3 months
    for region in forecaster.regions:
        forecast = forecasts[region].tail(3)
        print(f"\nPredictions for {region}:")
        print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_string())
        # Convert metrics DataFrame to accuracy scores


if __name__ == "__main__":
    main()