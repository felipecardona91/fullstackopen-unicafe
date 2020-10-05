import React from 'react'
import ReactDOM from 'react-dom'
import Display from "./display"
import './app.css'



const Statistics = ({good, bad, neutral, positive, total, average}) => { //es mejor mandar todos los props así, en vez de props y mas abajo llamarlo como props.props.good por ejemplo

    if (total === 0) { //este IF se usa para validar de que no se ha dado feedback, en caso de no haber datos no se renderiza la estadística
      return (
        <div>
            <table>
            <thead>
            <tr>
                <th><h1>Statistics</h1></th>
            </tr>
            </thead>
            </table>
          No Feedback Given
        </div>
      )
    }
    return(
        <div>
            <table>
            <thead>
            <tr>
                <th><h1>Statistics</h1></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><Display name={"Good"} /></td>
                <td><Display prop={good} /></td>
            </tr>
            <tr>
                <td><Display name={"Neutral"} /></td>
                <td><Display prop={neutral} /></td>
            </tr>
            <tr>
                <td><Display name={"Bad"} /></td>
                <td><Display prop={bad} /></td>
            </tr>
            <tr>
                <td><Display name={"Total"} /></td>
                <td><Display prop={total} /></td>
            </tr>
            <tr>
                <td><Display name={"Average"} /></td>
                <td><Display prop={average} /></td>
            </tr>
            <tr>
                <td><Display name={"Positive"} /></td>
                <td><Display prop={positive} /></td>
            </tr>
            </tbody>
            </table>
        </div>
      );
    }

    export default Statistics

