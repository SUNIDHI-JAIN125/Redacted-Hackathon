import React from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis } from 'recharts'

const Chart = () => {
    const data = [{ "product": "1", "games": "1" }, { "product": "12", "games": "10" }, { "product": "20", "games": "33" }, { "product": "30", "games": "54" }, { "product": "100", "games": "62" }]
    return (
        <div className='w-full '>
            <BarChart width={500} height={200} data={data} className='mx-auto my-4' >
                <YAxis dataKey="games"/>
                <Bar dataKey="product" type="monotone" fill='#111827' />

            </BarChart>


        </div>
    )
}

export default Chart