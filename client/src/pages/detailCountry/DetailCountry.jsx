import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import styles from "./DetailCountry.module.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DetailCountry() {
  const country = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(getCountryDetail(id.id));
  }, [dispatch, id.id]);

  return (
  
    <div className={styles.container}>
      <div >
        <div className={styles.country}>
          <div>
            <h3>
              {country.name} ({country.id})
            </h3>
            <img src={country.flag} alt="flag" width={250} />
          </div>
          <div>
            <p>
              <br />
              <strong>CAPITAL:</strong> {country.capital}
            </p>
            <p>
              <strong>SUB-REGION:</strong> {country.subregion}
            </p>
            <p>
              <strong>AREA:</strong> {country.area}Km²
            </p>
            <p>
              <strong>POPULATION:</strong> {country.population} habitants
            </p>
          </div>
        </div>
        <br /> <br />
        <div>
          <p>
            <strong>TOURIST ACTIVITIES:</strong>
          </p>
          {country.touristActivities?.length > 0 ? (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 700 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <b>NAME</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>DIFFICULTY</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>DURATION</b>
                    </TableCell>
                    <TableCell align="center">
                      <b>SEASON</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {country.touristActivities?.map((activitie, id) => (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{activitie.name}</TableCell>
                      <TableCell align="center">
                        {activitie.difficulty}
                      </TableCell>
                      <TableCell align="center">{`${activitie.duration} hs`}</TableCell>
                      <TableCell align="center">{activitie.season}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div>
              {" "}
              <p>
                {" "}
                <strong>
                  TOURIST ACTIVITIES NOT FOUND
                  <Link to="/activity"> (CREATE A NEW ACTIVITY)</Link>{" "}
                </strong>
              </p>{" "}
            </div>
          )}
        </div>
        <Link to="/countries">
        <div className={`btn btn-dark ${styles.button}`}>Back</div>
      </Link>
      </div>
      
    </div>
  );
}
