import { Select as AntSelect } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/languageSlice";

export default function LanguageSelect() {
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector((state) => state.language);

  const handleChange = (lng) => {
    dispatch(changeLanguage(lng));
  };

  return (
    <AntSelect
      value={currentLanguage}
      style={{ width: 80 }}
      onChange={handleChange}
      options={[
        { value: "tr", label: "TR" },
        { value: "en", label: "EN" },
      ]}
    />
  );
}
