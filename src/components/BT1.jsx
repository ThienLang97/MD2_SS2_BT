import React, { Component } from 'react'

export default class BT1 extends Component {
    render() {
        let arr = ["HTML", "Javascript", "Python", "C#"];
        return (
            <>
                <h1>Danh sách khóa học</h1>
                <ul>
                    {arr.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))

                    }
                </ul>
            </>
        )
    }
}
