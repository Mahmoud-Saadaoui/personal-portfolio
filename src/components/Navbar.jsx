import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>{t("navbar.home")}</li>
        <li>{t("navbar.about")}</li>
        <li>{t("navbar.contact")}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
