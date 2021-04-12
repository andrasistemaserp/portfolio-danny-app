import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

const PortfolioForm = ({ onSubmit, inicialData = {} }) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const { register, handleSubmit, setValue } = useForm({ defaultValues: inicialData })

  const handleDateChange = (dateType, setDate) => date => {
    setValue(dateType, date)
    setDate(date)
  }

  useEffect(() => {
    const { startDate, endDate } = inicialData
    if (startDate) { setStartDate(new Date(startDate)) }
    if (endDate) { setEndDate(new Date(endDate)) }
  }, [inicialData])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          {...register("title")}
          name="title"
          type="text"
          className="form-control"
          id="title" />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          {...register("company")}
          name="company"
          type="text"
          className="form-control"
          id="company" />
      </div>

      <div className="form-group">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          {...register("companyWebsite")}
          name="companyWebsite"
          type="text"
          className="form-control"
          id="companyWebsite" />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          {...register("location")}
          name="location"
          type="text"
          className="form-control"
          id="location" />
      </div>

      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          {...register("jobTitle")}
          name="jobTitle"
          type="text"
          className="form-control"
          id="jobTitle" />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description")}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description">
        </textarea>
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange('startDate', setStartDate)} //only when value has changed
          // onChange={handleStartDate} //only when value has changed
          // dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <div>
          <DatePicker
            disabled={!endDate}
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange('endDate', setEndDate)} //only when value has changed
          // onChange={handleEndDate} //only when value has changed
          // dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div className="form-group">
        {endDate &&
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDateChange('endDate', setEndDate)(null)}>
            No End Date
          </button>
        }
        {!endDate &&
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleDateChange('endDate', setEndDate)(new Date(new Date().setHours(0, 0, 0, 0)))}>
            Set End Date
          </button>
        }
      </div>
      <button
        type="submit"
        className="btn btn-primary">Create
      </button>
    </form>

  )
}

export default PortfolioForm