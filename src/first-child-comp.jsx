import React from "react";
import 'host_app/i18n';
import { useTranslation } from 'react-i18next';
import SearchForm from './Search-form'

function Component(props) {
  console.log("fffffffffffffffffff",props)
   const { t } = useTranslation();
  return (
    <>
       <SearchForm />
       <br />
       {/* <div>Hello {props.user.name}, your role is {props.user.role}</div> */}
    </>
  )

}

export default Component;
