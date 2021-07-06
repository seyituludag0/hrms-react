import React from "react";

export default function AdminEmployersView() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Button.Group widths="5">
            <Button as={NavLink} to="adminallemployersverifyfalse" color="blue">
              Güncelleme Onayı Bekleyen Şirketler
            </Button>
          </Button.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
}
