import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, TextInput } from "flowbite-react";
import { Spinner } from "flowbite-react";
import Swal from "sweetalert2";
import background from "./../../assets/background.png";

const TeaPredictions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [periods, setPeriods] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetPredictions = async () => {
    if (!periods) {
      Swal.fire("Error", "Please enter the number of periods", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}tea/predict`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ periods: parseInt(periods) }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch predictions");
      }

      const result = await response.json();

      if (result.data && result.data._id) {
        navigate(`/prediction-details/${result.data._id}`);
      } else {
        throw new Error("Prediction ID not found in response");
      }

      setOpenModal(false);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen p-4 flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/30">
        {/* Button to view predictions */}
        <Button
          onClick={() => setOpenModal(true)}
          className="w-96 bg-green-600 mb-4"
        >
          Get Tea Predictions
        </Button>

        {/* Button to view previous prices */}
        <Button
          onClick={() => navigate("/previous-prices")}
          className="w-96 bg-blue-600"
        >
          View Previous Prices
        </Button>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Enter Day Count</Modal.Header>
        <Modal.Body>
          <TextInput
            type="number"
            placeholder="Enter number of periods"
            value={periods}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                const num = parseInt(value, 10);
                if (num >= 1 && num <= 12) {
                  setPeriods(value);
                } else if (value === "") {
                  setPeriods("");
                }
              }
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleGetPredictions}
            className="w-full bg-green-600"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Submitting...</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
          <Button
            color="gray"
            onClick={() => setOpenModal(false)}
            className="w-full"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeaPredictions;
