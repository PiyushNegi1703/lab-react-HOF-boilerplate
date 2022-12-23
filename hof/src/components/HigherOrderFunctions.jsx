import React from "react";

export default class HigherOrderFunctions extends React.Component{

    // Constructed State
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    // Rendered All Items
    renderAllItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // Rendering Based on User Type
    renderBasedOnType = () => {
        const data = this.state.userData;
        const filterOnType = data.filter((item) => {
            if(item.user_type === 'Designer'){
                return item;
            };
        });
        
        const filteredData = filterOnType.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));

        return filteredData;
    }

    // Filtering all the Data starting with J
    renderDataWithJ = () => {
        const data = this.state.userData;
        const filterOnLetter = data.filter((item) => {
            if(item.name[0] === 'J'){
                return item;
            };
        });
        
        const filteredData = filterOnLetter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));

        return filteredData;
    }

    // All Data on Age Greater Than 28
    renderAge = () => {
        const data = this.state.userData;
        const filterAge = data.filter((item) => {
            if(item.age > 28 && item.age < 50){
                return item;
            };
        });
        
        const filteredData = filterAge.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));

        return filteredData;
    }

    // Years of the Designers
    years = () => {
        const data = this.state.userData;
        const filterOnType = data.filter((item) => {
            if(item.user_type === 'Designer'){
                return item;
            };
        });

        const reducedData = filterOnType.map((item) => {
            return item.years
        })

        return reducedData.reduce((total,num) => {
            return (
                <span>{total + num}</span>
                );
        });
    }

    // Rendering all the Data in DOM
    render() {
        return (
          <React.Fragment>
            <div className="display-box">
                <h1>All items</h1>
                <ul>{this.renderAllItems()} </ul>
            </div>

            <div className="display-box">
                <h1>Based on User Type</h1>
                <ul>{this.renderBasedOnType()} </ul>
            </div>

            <div className="display-box">
                <h1>All Data Starting With J</h1>
                <ul>{this.renderDataWithJ()} </ul>
            </div>

            <div className="display-box">
                <h1>All Data Based on Age Greater than 28 and Less than 50</h1>
                <ul>{this.renderAge()} </ul>
            </div>

            <div className="display-box">
                <h1>Total Years of the Designers</h1>
                <ul>{this.years()}</ul>
            </div>
          </React.Fragment>
          )
        };
}