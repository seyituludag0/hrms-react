import React,{useState} from 'react'
import SocialMediaService from '../../../services/SocialMediaService';
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function SocialMediaDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteSocialMedia = () => {
        let socialMediaService = new SocialMediaService();
        socialMediaService.delete(id).then(result=>toast.success(result.data.mesage));
    }

    return (
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Icon name="x"/>}
                style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
            >
                <Modal.Header>Cv'deki sosyal medya hesabınızı silmek üzeresiniz!</Modal.Header>
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
                        onClick={() => deleteSocialMedia()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
