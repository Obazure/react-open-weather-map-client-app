import React, {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Modal} from 'react-bootstrap'
import {AppDispatch, AppState} from '../redux/rootReducer'
import {closeAlert} from '../redux/actions'

const ModalAlert: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const message = useSelector((state: AppState) => state.alert)

    return (
        <Modal show={!!message} onHide={() => dispatch(closeAlert())}>
            <Modal.Header closeButton={true}>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
        </Modal>
    )
}

export default ModalAlert
