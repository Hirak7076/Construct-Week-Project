import LinkOBJECT from "../support/PageOBJECT/LinkINFO";
import LoginINFO from "../support/PageOBJECT/LoginINFO";
import LogoutINFO from "../support/PageOBJECT/LogoutINFO";
import RegisterINFO from "../support/PageOBJECT/RegisterINFO";
import RegisterAffINFO from "../support/PageOBJECT/RegisterAffINFO";
import ViewAccountDetailsINFO from "../support/PageOBJECT/ViewAccountDetailsINFO";
import ViewAffDetailINFO from "../support/PageOBJECT/ViewAffDetailsINFO";
import EditAccountDetailsINFO from "../support/PageOBJECT/EditAccountDetailsINFO";
import EditAffDetailINFO from "../support/PageOBJECT/EditAffDetailsINFO";
import TrackAffINFO from "../support/PageOBJECT/TrackAffINFO";
import AddressBookINFO from "../support/PageOBJECT/AddressBookINFO";

const Login = new LoginINFO();
const Link = new LinkOBJECT();
const Logout = new LogoutINFO();
const Register = new RegisterINFO();
const AffRegister = new RegisterAffINFO();
const ViewAccountINFO = new ViewAccountDetailsINFO();
const ViewAffINFO = new ViewAffDetailINFO();
const EditAccountINFO = new EditAccountDetailsINFO();
const EditAffINFO = new EditAffDetailINFO();
const Track = new TrackAffINFO();
const Address = new AddressBookINFO();

describe('AllTests', () => {
    it('TestSteps', () => {
        Login.enterURL();
        Register.NewRegister();
        Logout.logout();
        Login.login();
        Link.linkclick("Edit your account information");
        ViewAccountINFO.AccountDetailsview();
        Link.linkclick("Edit your account information");
        EditAccountINFO.AccountDetailsedit();
        //Link.linkclick("Register for an affiliate account");
        //AffRegister.AffiRegister();
        //Link.linkclick("Edit your affiliate information");
        //ViewAffINFO.AffDetailsView();
        //Link.linkclick("Edit your affiliate information");
        //EditAffINFO.AffDetailsEdit();
        //Link.linkclick("Custom Affiliate Tracking Code");
        //Track.TrackAff();
        Link.linkclick("Address Book");
        Address.checkAddressBook();
        Logout.logout();
    });
});
