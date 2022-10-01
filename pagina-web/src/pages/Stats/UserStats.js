import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import { Chart } from "react-google-charts";
import { getAdminStats } from '../../services/axios/user';

const dataDefaultTexts = {
  lugares: {
    title: "Lugares mas reservados",
    buttonText: "Lugares mas reservados",
  },
  productos: {
    title: "Productos mas reservados",
    buttonText: "Productos mas reservados",
  },
  categorias: {
    title: "Categorias mas reservadas",
    buttonText: "Categorias mas reservadas",
  }
}

export const UserStats = () => {
  const [selectedButton, setSelectedButton] = useState(null)
  const [data, setData] = useState({})
  const [formattedData, setFormattedData] = useState({})

  useEffect(() => {
    const formatGraphObject = () => {
      Object.keys(data).forEach(key => {
        const columns = []
        let columnData
        data[key].forEach(el => {
          if (key === 'productos') {
            columnData = ["Productos", "Cantidad"]
            return columns.push([el.recurso.nombre, el.count])
          }
          if (key === 'lugares') {
            columnData = ["Lugares", "Cantidad"]
            return columns.push([`${el.recurso.piso}, ${el.recruso.salon}`, el.count])
          }
          if (key === 'categorias') {
            columnData = ["Categorias", "Cantidad"]
            return columns.push([el.recurso, el.count])
          }
        })
        setFormattedData(prev => ({
          ...prev,
          [key]: {
            data: [columnData, ...columns],
            buttonText: dataDefaultTexts[key].buttonText,
            options: {
              chart: {
                title: dataDefaultTexts[key].title,
              },
            }
          }
        }))
      })
    }

    if (Object.keys(data).length === 0) {
      getAdminStats({ graph: 'Producto', timeRange: 'year'}).then(data => {setData(prev => ({...prev, "productos": data.value}))})
      getAdminStats({ graph: 'Lugar ', timeRange: 'year'}).then(data => {setData(prev => ({...prev, "lugares": data.value}))})
      getAdminStats({ graph: 'Producto-categoria', timeRange: 'year'}).then(data => {setData(prev => ({...prev, "categorias": data.value}))})
    }
    formatGraphObject()
  }, [data])

  const handleOnClick = (type) => {
    if (selectedButton === type) {
      setSelectedButton(null)
    } else {
      setSelectedButton(type)
    }
  }

  return (
    <>
      <section className='stats-container'>
        <div className='stats-top'>
          <h1>Estadistica</h1>
          <button>Descargar</button>
        </div>
        <div className='stats-options'>
          {Object.keys(formattedData).map(key => (
            <Button key={key} type={`${selectedButton === key && 'primary'}`} onClick={() => handleOnClick(key)}>{formattedData[key].buttonText}</Button>
          ))}
        </div>
        <div className='stats-graphs'>
          {formattedData[selectedButton] && <Chart
            chartType="Bar"
            height="300px"
            data={formattedData[selectedButton].data}
            options={formattedData[selectedButton].options}
          />}
        </div>
      </section>
    </>
  )
}
