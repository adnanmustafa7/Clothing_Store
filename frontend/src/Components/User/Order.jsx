import './user.css'

import { Form } from 'react-bootstrap'
import { FcSearch } from 'react-icons/fc'
const Order = () => {
    return (
        <>
        <h2 className='p-3'><b>Orders</b></h2>
            <Form>
                <div className='d-flex mt-5'>
                    <FcSearch size={35} />
                    <Form.Control className='p-2 search_bar' placeholder='Search' />
                </div>
            </Form>
        
        </>
    )

}

export default Order;