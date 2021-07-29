import React,{useState} from 'react'
import LanguageService from '../../../services/LanguageService';
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function LanguageDelete({id}) {

    const [open, setOpen] = useState(false)

    const deleteLanguage = () => {
        let languageService = new LanguageService();
        console.log("silindi");
        languageService.delete(id).then(toast.success("Dil silindi!"));
    }

    return (
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                // trigger={<Button floated="right" negative><Icon name="trash alternate" />Sil</Button>}
                trigger={
                    <Icon name="x"/>
                }
                style={{height:"15rem", marginLeft:"23rem", marginTop:"17rem"}}
            >
                <Modal.Header>Cv'deki dili  silmek üzeresiniz!</Modal.Header>
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
                        onClick={() => deleteLanguage()}
                        danger
                    />
                </Modal.Actions>
            </Modal>
    )
}
