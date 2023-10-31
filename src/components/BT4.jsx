import React, { Component } from 'react'
import BT4_1 from './BT4_1'
import BT4_2 from './BT4_2'
export default class BT4 extends Component {
  render() {
    return (
        <><section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="row">
                                    <BT4_1/>
                                    <BT4_2/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
}
