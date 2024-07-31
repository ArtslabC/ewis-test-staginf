import BankingAndFinanceModel from "./models/BankingAndFinanceModel";
import EducationModel from "./models/EducationModel";
import ManufacturingModel from "./models/ManufacturingModel";
import HealthcareModel from "./models/HealthcareModel";
import RetailModel from "./models/RetailModel";
import PublicModel from "./models/PublicModel";
import TeleCommunicationModel from "./models/TelecommunicationModel";

function ExperinceAboutUs({ type }) {
  if (type == 1) {
    return <BankingAndFinanceModel />;
  } else if (type == 2) {
    return <EducationModel />;
  } else if (type == 3) {
    return <ManufacturingModel />;
  } else if (type == 4) {
    return <HealthcareModel />;
  } else if (type == 5) {
    return <RetailModel />;
  } else if (type == 6) {
    return <PublicModel />;
  } else if (type == 7) {
    return <TeleCommunicationModel />;
  } else {
    return <></>;
  }
}

export default ExperinceAboutUs;
