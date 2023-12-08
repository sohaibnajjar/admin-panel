import { Button, Card, Flex } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./User.module.css";
import { CaretLeftOutlined } from "@ant-design/icons";

const User = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params.id);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <Flex
        className={styles.mainContainer}
        justify="space-between"
        align="center"
      >
        <Button size="large" type="text" onClick={handleBackClick}>
          <CaretLeftOutlined />
        </Button>
      </Flex>
      <Card className={styles.loginCard}>
        <h1>User {params.id}</h1>
        <Link to={`/users/${params.id}/edit`}>Edit</Link>
      </Card>
    </>
  );
};

export default User;
