import { useState } from 'react'
import {Input, Radio, Checkbox,DatePicker, Select, Form} from 'antd' 
import './App.css';


const options  = ['Hangzhou', 'Ningbo', 'Wenzhou']
const {RangePicker} = DatePicker
function App() {
  const [nombre, setNombre]= useState('')
  const [apellido, setApellido] = useState('')
  const [genero, setGenero] = useState('M')
  const [invalido, setInvalido] = useState(false)
  const [cumple, setCumple] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd,setDateEnd]= useState('')
  const [select, setSelect] = useState('')

  const handleChange= (e, cb) =>{
    console.log('e', e.target.value)
      cb(e.target.value)
  }
  function onChange(date, dateString){
      
      setCumple(dateString)
  }
  console.log('cumple',cumple)
  const onFinish = values=>{
    console.log('recibe values de form:',values)
  };
     
  return (
    <div className="App">
      <h1>Formulario</h1>
      <Form onFinish={onFinish} style={{maxWidth:'500px', padding:'0 15px'}}>
        <Form.Item 
          name= "nombres" 
          label="Nombres:" 
          rules={[
            {
              whitespace: false,
              required:true
            }  
          ]}
        >
          <Input placeholder="Nombres" value={nombre} onChange={(e)=> handleChange(e,setNombre)}/>
        </Form.Item>
        
        <Input placeholder="Apellidos" value={apellido} onChange={(e)=> handleChange(e,setApellido)}/>
        <br/><br/>
        <Radio.Group onChange={(e)=> handleChange(e,setGenero)} value= {genero}>
          <Radio value='M'>Masculino</Radio>
          <Radio value='F'>Femenino</Radio>
        </Radio.Group>
        <br/><br/>
        <Checkbox onChange={()=> setInvalido(prevState =>!prevState)} >Es invalido</Checkbox>
        <br/><br/>
        <DatePicker onChange={onChange} format="DD-MM-YYYY "/>
        <br/><br/>
        <RangePicker
          // disabledDate={disabledDate}
          // disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            // defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            defaultValue: [dateStart,dateEnd]
          }}
          onCalendarChange={e =>{
            setDateStart(e[0])
            setDateEnd(e[1])
          } }
          format="YYYY-MM-DD"
         />
          <br/><br/>
        <Select style={{ width: 120 }} value={select} onChange={(e)=> setSelect(e)}>
           {options.map(item => (
          <Select.Option key={item}>{item}</Select.Option>
        ))}
        </Select>
        <br/> <br/>
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="select one country"
          defaultValue={['china']}
          onChange={(e)=> setSelect(e)}
          optionLabelProp="label"
        >
          <Select.Option value="china" label="China">
            <div className="demo-option-label-item">
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </div>
          </Select.Option>
          <Select.Option value="usa" label="USA">
            <div className="demo-option-label-item">
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </div>
          </Select.Option>
          <Select.Option value="japan" label="Japan">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </div>
          </Select.Option>
          <Select.Option value="korea" label="Korea">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </div>
          </Select.Option>
  </Select>,
      </Form>
    </div>
  );
}

export default App;
