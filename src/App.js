import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Sdata from './Sdata';

<>
    <h1 className='heading_style'>Top Original Netfilx Series</h1>

    {Sdata.map((val) => {
       return (
        <Card
         key={val.id}
          imgsrc={val.imgsrc}
          Title={val.Title}
          sname={val.sname}
          link={val.link}
        />

      );

    }
    )
    }

</>
export default App;