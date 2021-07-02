import React from 'react';
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function SignedIn({signOut}) {
    return (
        <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/76704724?s=400&u=648e6b282d136fd28b63254f27375219f66b1f3f&v=4"/>
            <Dropdown pointing="top right" text="Seyit">
                <Dropdown.Menu>
                    <Dropdown.Item  as={NavLink} to="/employee" text="Bilgilerim" icon="info"/>
                    <Dropdown.Item  as={NavLink} to="/admin" text="Admin Paneli" icon="user"/>
                    {/* <Dropdown.Item as={NavLink} to="/adminjobpostinglist" text="Sisteme düşen iş ilanları" icon="info" />  */}
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
    )
}
