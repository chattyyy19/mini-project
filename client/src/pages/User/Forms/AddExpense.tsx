import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function AddExpense({ display, setDisplay, onAddExpense }: any) {
  const [formData, setFormData] = useState({
    description: "",
    date: "",
    amount: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const amount = parseFloat(formData.amount) || 0;
    const date = (formData.date);
    onAddExpense(amount, date); // Call the parent handler with the amount
    setDisplay(false);
  }

  return (
    <>
      <div className="popupblur" style={{ display: display ? "flex" : "none" }}></div>
      <div className="popupFrom" style={{ display: display ? "flex" : "none" }}>
        <h2>Expense Details</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="date">Expense Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Save Details</button>
        </form>

        <div className="closeButton" onClick={() => setDisplay(false)}>
          <FaXmark />
        </div>
      </div>
    </>
  );
}
