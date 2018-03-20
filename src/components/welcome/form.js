import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


const AuthForm = ({ form, handles: {trySubmit, setInput, change, check, reset, submit}, user, classes } ) => (
    <form onSubmit={submit}>
      <TextField name="username" type="text" autoComplete="username" margin="normal" fullWidth autoFocus
        label="Username"
        value={user.username}
        onChange={change}
        error={check("username")}
        placeholder="Type your username..."
        required
      />
      <TextField name="password" type="password" margin="normal" fullWidth autoComplete="new-password"
        label="Password"
        value={user.password}
        onChange={change}
        error={check("password")}
        placeholder="Type your password..."
        required
      />
        { form === "signup" &&
      <TextField name="password2" type="password" fullWidth margin="normal" autoComplete="new-password"
        label="Repeat password"
        placeholder="Repeat your password..."
        value={user.password2}
        onChange={change}
        error={check("password2")}
        inputRef={setInput}
        required
      />
        }
      <Button type="submit" fullWidth variant="raised" color="primary" className={classes.signUpButton}
        onClick={trySubmit} >
        {form}
      </Button>
        { form === "signup" &&
      <Button type="reset" fullWidth variant="raised" color="secondary" className={classes.signUpButton}
        onClick={reset}
      >
        Reset
      </Button>
        }
    </form>
)

export default AuthForm
