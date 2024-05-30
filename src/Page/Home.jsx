import React from 'react'
import Sliders from '../Components/Sliders'
import TableBook from '../Components/Layout/TableBook'
import Menu from '../Components/Layout/Menu'
import Testimony from '../Components/Layout/Testimony'
import Chef from '../Components/Layout/Chef'
import Blog from '../Components/Layout/Blog'
import Footer from '../Components/Layout/Footer'
import BookTableCover from '../Components/Layout/BookTableCover'



export default function Home() {
    return (
        <>
         <Sliders/>
         <TableBook/>
         <Menu/>
         <Testimony/>
         <Chef/>
         <Blog/>
         <BookTableCover/>
         <Footer/>
        </>
    )
}
