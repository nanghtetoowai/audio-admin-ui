import axios from "axios";
import React from "react";
import _ from "lodash";
import { message, Modal } from "antd";
import { API_URL, token } from "../constants";


const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axiosInstance.interceptors.request.use((config) => {
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }
  return config;
});

const ErrorTable = ({ data }) =>
  _.map(data?.errors, ({ row, errors }) => (
    <React.Fragment key={row}>
      <h4>{`Row: ${row}, has invalid data.`}</h4>
      <ul>
        {_.map(errors, (error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </React.Fragment>
  ));

const sendNotification = ({ status, data, statusText }) => {
  if (status >= 400 && status < 500) {
    if (data?.message) {
      if (_.isEmpty(data?.errors)) {
        message.error(data.message);
      } else {
        // message.error(<Message message={data.message} errors={data.errors} />);
        Modal.error({
          title: data.message,
          content: <ErrorTable data={data} />,
          bodyStyle: { maxHeight: 600, overflow: "auto" },
        });
      }
    } else if (data?.error) {
      message.error(data.error);
    } else {
      Modal.error({
        title: "Unknown error",
        content: <ErrorTable data={data} />,
        bodyStyle: { maxHeight: 600, overflow: "auto" },
      });
    }
  } else {
    Modal.error({
      title: statusText,
      content: <ErrorTable data={data} />,
    });
  }
};

axiosInstance.interceptors.response.use(
  (response) =>
    // sendNotification(response);
    response,
  (error) => {
    sendNotification(error.response);
    if (error.response.status === 401 && window.location.pathname !== "/") {
      window.location = "/";
    }
    // throw error;
    return Promise.reject(error.response.data, error.response.data.errors);
  }
);

export default axiosInstance;
