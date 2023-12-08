import { Rule } from "antd/es/form";

interface ValidationSchemaParams {
  userName: Rule[];
  password: Rule[];
}

const validationSchema: ValidationSchemaParams = {
  userName: [{ required: true, message: "Please input your Username!" }],
  password: [
    { required: true, message: "Please input your Password!" },
    { min: 6, message: "Password must be at least 6 characters" },
  ],
};

export default validationSchema;
