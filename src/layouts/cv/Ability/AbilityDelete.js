import React,{useState} from 'react'
import AbilityService from '../../../services/AbilityService';
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function AbilityDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteAbility = () => {
        let abilityService = new AbilityService();
        console.log("silindi");
        abilityService.delete(id).then(toast.success("Yetenek silindi!"));
    }

    return (
        
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        // trigger={<Button floated="right" negative><Icon name="trash alternate" />Sil</Button>}
        trigger={
            // <Button floated="right" style={{backgroundColor:"transparent"}}>
      <Icon name="x"></Icon>
            // </Button>
        }
        style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
    >
        <Modal.Header>Cv'deki yeteneğinizi  silmek üzeresiniz!</Modal.Header>
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
                onClick={() => deleteAbility()}
            />
        </Modal.Actions>
    </Modal>

    )
}
