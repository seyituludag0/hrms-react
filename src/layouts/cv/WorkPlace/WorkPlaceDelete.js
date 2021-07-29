import React,{useState} from 'react'
import WorkPlaceService from '../../../services/WorkPlaceService';
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function WorkPlaceDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteWorkPlace = () => {
        let workPlaceService = new WorkPlaceService();
        console.log("silindi");
        workPlaceService.delete(id).then(result=>toast.success(result.data.message));
    }

    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button floated="right" negative><Icon name="trash alternate" />Sil</Button>}
                style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
            >
                <Modal.Header>Cv'deki iş deneyiminiz silmek üzeresiniz!</Modal.Header>
                <Modal.Content>
                    Onaylıyor musunuz?
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        Vazgeç
                    </Button>
                    <Button
                        content="Evet"
                        labelPosition='right'
                        icon='checkmark'
                        primary
                        onClick={() => setOpen(false)}
                        onClick={() => deleteWorkPlace()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
        </div>
    )
}
