import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Dashboard/Home/Home.component';
import SingleEmail from './Dashboard/SingleEmail/SingleEmail.component';
import Terminology from './Dashboard/Terminology/Terminology.component';
import VerifyList from './Dashboard/VerifyList/VerifyList.component';
import Logout from './Logout';

export default class Conatainer extends Component {
    render() {
        return (
            <Routes>
                <Route path="/logout" element={<Logout />} />
                <Route path="/member/home" element={<Home />} />
                <Route path="/member/verify" element={<SingleEmail />} />
                <Route path="/member/upload" element={<VerifyList />} />
                <Route path="/member/terminology" element={<Terminology />} />
            </Routes>
        )
    }
}
