import "./Content.scss";
import CompanyLogo from "../../assets/CompanyLogo.png";
import CssIcon from "../../assets/css-icon.png";
import UrlIcon from "../../assets/url-icon.png";
import HtmlIcon from "../../assets/html-icon.png";

function Content() {
  return (
    <>
      <div className="content-wrapper">
        <div className="company-logo">
          <img src={CompanyLogo} alt="Company Logo" className="logo-image" />
        </div>

        <div className="content-box-1">
          <div className="group">
            <p className="text-wrapper-1">Lorem ipsum dolor sit asmet?</p>
            <p className="text-wrapper-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
        </div>

        <div className="content-box-2">
          <div className="row">
            <div id="box1" className="col">
              <h2>Lorem ipsum dolor sit amet</h2>
              <img src={CssIcon} alt="CSS" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                vestibulum mattis. Aliquam egestas nunc at ullamcorper
                ultricies. Donec feugiat velit nulla, vel sodales est
                ullamcorper id.
              </p>
            </div>
            <div id="box2" className="col">
              <h2>Lorem ipsum dolor sit amet</h2>
              <img src={HtmlIcon} alt="HTML" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                vestibulum mattis. Aliquam egestas nunc at ullamcorper
                ultricies. Donec feugiat velit nulla, vel sodales est
                ullamcorper id.
              </p>
            </div>
            <div id="box3" className="col">
              <h2>Lorem ipsum dolor sit amet</h2>
              <img src={UrlIcon} alt="URL" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                vestibulum mattis. Aliquam egestas nunc at ullamcorper
                ultricies. Donec feugiat velit nulla, vel sodales est
                ullamcorper id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
