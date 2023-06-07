import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import axios from "axios";
import validationFormActivities from "./ValidationFormActivities";
import styles from "./FormActivities.module.css";

const FormActivities = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesOrigin);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //Initial state form
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  // Handle form errors
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: "",
  });

  //Handle selectd countries
  const [countriesName, setCountriesName] = useState({ countries: [] });

  // Updating the status of the form according to data entered
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "countryId") {
      // Setting data only for the selected countries
      const countryName = event.target.options[event.target.selectedIndex].text;
      const countryData = {
        id: value,
        countryName,
      };
      setForm({
        ...form,
        countryId: [...form.countryId, value],
      });
      setCountriesName({
        ...countriesName,
        countries: [...countriesName.countries, countryData],
      });
    } else {
      setForm({
        ...form,
        [property]: value,
      });
    }

    //Validate form input data
    setErrors(
      validationFormActivities({
        ...form,
        [property]: value,
      })
    );
  };

  
  function handleDelete(idCountry) {
    setForm({
      ...form,
      countryId: form.countryId.filter((country) => country !== idCountry),
    });
    setCountriesName({
      ...countriesName,
      countries: countriesName.countries.filter(
        (country) => country.id !== idCountry
      ),
    });

    setErrors(
      validationFormActivities({
        ...form,
        countryId: form.countryId.filter((country) => country !== idCountry),
      })
    );
  }

  //Submit validate and send
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      if (
        !form.name === "" ||
        !form.difficulty === "" ||
        !form.duration === "" ||
        !form.season === "" ||
        form.countryId.length === 0
      )
        return alert("Please enter all the fields of the form");
      const data = (await axios.post("http://localhost:3001/activities", form))
        .data;

      alert(data);
      window.location.reload(true);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className={styles.div_containerActivity}>
      <h1>Form to create a new Activity</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name of the activity: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div className={styles.div_containerSelectors}>
          <label>Difficulty: </label>
          <select
            name="difficulty"
            defaultValue={"DEFAULT"}
            onChange={changeHandler}
          >
            <option value="DEFAULT" disabled>
              Sort by difficulty
            </option>
            <option value="1"> 🌟</option>
            <option value="2"> 🌟🌟 </option>
            <option value="3"> 🌟🌟🌟 </option>
            <option value="4"> 🌟🌟🌟🌟 </option>
            <option value="5"> 🌟🌟🌟🌟🌟</option>
          </select>
        </div>

        <div>
          <label>Duration: </label>
          <input
            type="time"
            name="duration"
            step="2"
            value={form.duration}
            onChange={changeHandler}
          />
          {errors.duration && <span>{errors.duration}</span>}
        </div>

        <div className={styles.div_containerSelectors}>
          <label>Season: </label>
          <select name="season" onChange={changeHandler} defaultValue={""}>
            <option value="" disabled>
              Select Season
            </option>
            <option value="autumn">Autumn</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>
          {errors.season && <span>{errors.season}</span>}
        </div>

        <div className={styles.div_containerSelectors}>
          <label>Country: </label>
          <select
            id="country"
            name="countryId"
            defaultValue={""}
            onChange={changeHandler}
          >
            <option value="" disabled>
              Select countries...
            </option>
            {countries?.map((country) => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countryId && <span>{errors.countryId}</span>}
        </div>

        <div className={styles.div_containerCountries}>
          {countriesName.countries?.map((country) => {
            return (
              <div key={country.id}>
                <p className={styles.card}>{country.countryName}</p>
                <button
                  className={styles.x}
                  type="button"
                  onClick={() => handleDelete(country.id)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>

        {Object.keys(errors).length === 0 ? (
          <button className={styles.global_button} type="submit">
            Submit
          </button>
        ) : (
          <button className={styles.global_button} type="submit" disabled>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default FormActivities;
