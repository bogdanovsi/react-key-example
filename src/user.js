import { useEffect, useRef, memo } from "react";

const usePrev = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const User = memo((props) => {
  const prevName = usePrev(props.name);

  useEffect(() => {
    console.log("DID MOUNT", props.name);

    return () => {
      console.log("WILL UNMOUNT", props.name);
    };
  }, []);

  useEffect(() => {
    if (prevName !== undefined) {
      console.log("DID UPDATE", prevName, "->", props.name);
    }
  }, [props.name]);

  return <div>{props.name}</div>;
});

const Admin = memo((props) => {
  const prevName = usePrev(props.name);

  useEffect(() => {
    console.log("DID MOUNT", props.name);

    return () => {
      console.log("WILL UNMOUNT", props.name);
    };
  }, []);

  useEffect(() => {
    if (prevName !== undefined) {
      console.log("DID UPDATE", prevName, "->", props.name);
    }
  }, [props.name]);

  return <div>Admin: {props.name}</div>;
});

export default ({ users, withoutKey }) =>
  users.map((u, i) => {
    const Component = u.role === "admin" ? Admin : User;

    return <Component key={withoutKey ? i : u.id} name={u.name} />;
  });
