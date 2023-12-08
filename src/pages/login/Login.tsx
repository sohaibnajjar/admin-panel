import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import validationSchema from "./validationSchema";
import styles from "./Login.module.css";
import { useEffect } from "react";

interface FieldType {
  username?: string;
  password?: string;
}

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: FieldType) => {
    console.log(values.password, values.username);
    localStorage.setItem("token", "1234567890");
    navigate("/", { replace: true });
  };

  const hasLocalToken = !!localStorage.getItem("token");

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  if (hasLocalToken) {
    return null;
  }

  return (
    <Flex align="center" justify="center" className="fullHeight">
      <Card className={styles.loginCard}>
        <Typography.Title level={3}>Login</Typography.Title>
        <Typography.Paragraph>Sign In to your account</Typography.Paragraph>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={validationSchema.userName}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={validationSchema.password}>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default Login;
