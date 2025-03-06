import React from "react";

import { Form, StatefulButton } from "@openedx/paragon";
import { Helmet } from "react-helmet";

import AccountActivationMessage from "../login/AccountActivationMessage";

import { FormGroup, PasswordField } from "../common-components";
import { getActivationStatus } from "../data/utils";

const NafathPage = () => {
  const activationMsgType = getActivationStatus();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO
  };

  return (
    <>
      <Helmet>
        <title>Nafath</title>
      </Helmet>
      <div className=" auth_inner_wrap">
        <AccountActivationMessage messageType={activationMsgType} />
        <Form id="sign-in-form" name="sign-in-form">
          <FormGroup
            name="emailOrUsername"
            autoComplete="on"
            floatingLabel="National Id / Iqama*"
          />
          <PasswordField
            name="password"
            value={""}
            autoComplete="off"
            showScreenReaderText={false}
            showRequirements={false}
            floatingLabel="Password"
          />
          <div className="auth_action_wrap">
            <StatefulButton
              name="sign-in"
              id="sign-in"
              type="submit"
              variant="brand"
              className="login-button-width"
              labels={{
                default: "Login",
              }}
              onClick={handleSubmit}
              onMouseDown={(event) => event.preventDefault()}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default NafathPage;
