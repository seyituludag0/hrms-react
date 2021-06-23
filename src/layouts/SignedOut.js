import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function SignedOut({signedIn}) {
    return (
        <div>
              <Menu.Item>
              <Link to="/login"><Button primary>Giriş Yap</Button></Link>
            <Link to="/register"><Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button></Link>
           </Menu.Item>
        </div>
    )
}
