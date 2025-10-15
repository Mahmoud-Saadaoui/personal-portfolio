import React from "react";
import { Typography, Select, Space } from "antd";
import { FormattedMessage } from "react-intl";
import { I18nProvider } from "./i18n";

const { Title, Paragraph } = Typography;

const AppContent = ({ locale, setLocale }) => {
  return (
    <div style={{ padding: 40, textAlign: locale === "ar" ? "right" : "left" }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Select
          value={locale}
          style={{ width: 200 }}
          onChange={setLocale}
          options={[
            { value: "en", label: "🇬🇧 English" },
            { value: "fr", label: "🇫🇷 Français" },
            { value: "ar", label: "🇸🇦 العربية" },
          ]}
        />

        <Title>
          <FormattedMessage id="app.title" />
        </Title>

        <Paragraph>
          <FormattedMessage id="app.description" />
        </Paragraph>
      </Space>
    </div>
  );
};

const App = () => (
  <I18nProvider>
    <AppContent />
  </I18nProvider>
);

export default App;