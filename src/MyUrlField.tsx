import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  const value = record ? record[source] : null;
  return value ? (
    <Link href={value} sx={{ textDecoration: "none" }}>
      {value}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  ) : null;
};

export default MyUrlField;
