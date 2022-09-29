import { Fab, Grid, Paper, TextField } from "@mui/material"

const FormCheckout = ({ handleImputChange, handleSubmit}) => {
    
    return (
        <Paper
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '40%' },
                flexGrow: 1
            }}
            autocomplete off
            className="form-chekout-container"
            onSubmit={handleSubmit}
        >
            <Grid item xs="auto" display="flex" justifyContent="center">
                <TextField
                    required
                    id = "user"
                    label = "Nombre completo"
                    color="secondary"
                    className="checkout-imput"
                    onChange={handleImputChange}
                    />    
            </Grid>
            <Grid item xs="auto" display="flex" justifyContent="center">
                <TextField
                    required
                    id = "email"
                    label = "Email"
                    type="email"
                    color="secondary"
                    className="checkout-imput"
                    onChange={handleImputChange}
                    />
            </Grid>
            <Grid item xs="auto" display="flex" justifyContent="center">
                <TextField
                    required
                    id = "telephone"
                    label = "Teléfono"
                    color="secondary"
                    className="checkout-imput"
                    onChange={handleImputChange}
                    />
            </Grid>
            <Grid item xs="auto" display="flex" justifyContent="center">
                <TextField
                    required
                    id = "adress"
                    label = "Dirección"
                    color="secondary"
                    className="checkout-imput"
                    onChange={handleImputChange}
                    />
            </Grid>
            <Grid item display="flex" justifyContent="center" >
                <Fab type="submit" variant="extended" color="secondary" sx={{m:3}}>Enviar</Fab>
            </Grid>
        </Paper>
    )
}

export default FormCheckout