return (
    <>
      <Container className="Login" fluid="lg">
        {status.type === 'success' ? (
          <Redirect
            to={{
              pathname: '/dashboard',
            }}
          />
        ) : (
          ''
        )}
        <div>
          <h2>Login</h2>{' '}
          <Form onSubmit={loginSubmit}>
            <FormGroup size="lg" controlId="formBasicEmail">
              <FormLabel>E-mail</FormLabel>
              <FormControl
                autoFocus
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                autoComplete="off"
                onChange={valueInput}
              />
            </FormGroup>
            <FormGroup size="lg" controlId="password">
              <FormLabel>Senha</FormLabel>
              <FormControl
                id="password"
                type="password"
                name="password"
                autoComplete="on"
                onChange={valueInput}
              />
            </FormGroup>
            <Button
              variant="success"
              type="button"
              block
              size="lg"
              type="submit"
            >
              Entrar
            </Button>{' '}
            <Button variant="primary" size="lg" block href="/create">
              Fazer cadastro
            </Button>
          </Form>
        </div>
      </Container>