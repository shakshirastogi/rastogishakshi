import React, { Component } from 'react'

export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    name: "shakshi",
                    age: "30",
                    phone_no: "56466646"
                },
                {
                   
                    name: "piter",
                    age: "32",
                    phone_no: "564644656" 
                },
                {
                   
                    name: "priyan",
                    age: "20",
                    phone_no: "664646464" 
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>List of Users</h1>
                {this.state.list.map((res) => {
                    return (
                        <div>
                      <h5>Name: {res.name}</h5>
                      <h5>Age: {res.age}</h5>
                      <h5>phone_no: {res.phone_no}</h5>
                      </div>
                    )
                })}
            </div>
        )
    }
}
