import { Button, Offcanvas } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRedux } from "~/hooks";
import { RootState } from "~/store";
import {
  setColor,
  setLanguageMode,
  setPosition,
  setSettingMenuShow,
  setTheme,
  setType,
  setVerticalLocation,
  setWidth,
} from "~/store/theme";
import {
  LayoutColor,
  LayoutLanguageMode,
  LayoutPosition,
  LayoutTheme,
  LayoutType,
  LayoutVerticalLocation,
  LayoutWidth,
} from "~/types";
import FormInput from "../Custom/FormInput";
import { toast } from "react-toastify";
import { getThemeHandle } from "~/utils/storeHandle";

const ThemeOffcanvas = () => {
  const { dispatch, appSelector } = useRedux();
  const { color, languageMode, position, theme, type, width, verticalLocation, settingMenuShow } = appSelector(
    (state: RootState) => state.theme,
  );
  const { control, handleSubmit } = useForm();

  const submit = (values: any) => {
    localStorage.setItem(import.meta.env.VITE_THEME_KEY, JSON.stringify(values));
    toast.success("Tema ayarları kaydedildi.");
  };

  const reset = () => {
    getThemeHandle();
  };

  return (
    <Offcanvas
      id="themeOffcanvas"
      show={settingMenuShow}
      scroll
      placement="end"
      onHide={() => dispatch(setSettingMenuShow(false))}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>TEMA AYARLARI</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="pt-0">
        <form onSubmit={handleSubmit(submit)}>
          <h4>Sayfa Teması</h4>
          <FormInput.Check
            type="radio"
            name="theme"
            title="Aydınlık Mod"
            classNameSubContainer="form-switch"
            value={LayoutTheme.LIGHT}
            checked={LayoutTheme.LIGHT === theme}
            control={control}
            onClick={() => dispatch(setTheme(LayoutTheme.LIGHT))}
          />
          <FormInput.Check
            type="radio"
            name="theme"
            title="Karanlık Mod"
            classNameSubContainer="form-switch"
            value={LayoutTheme.DARK}
            checked={LayoutTheme.DARK === theme}
            control={control}
            onClick={() => dispatch(setTheme(LayoutTheme.DARK))}
          />
          <hr />
          <h4>Sayfa Düzeni</h4>
          <FormInput.Check
            type="radio"
            name="type"
            title="Yatay (Geniş)"
            classNameSubContainer="form-switch"
            value={LayoutType.HORIZONTAL}
            checked={LayoutType.HORIZONTAL === type}
            control={control}
            onClick={() => dispatch(setType(LayoutType.HORIZONTAL))}
          />
          <FormInput.Check
            type="radio"
            name="type"
            title="Yatay"
            classNameSubContainer="form-switch"
            value={LayoutType.CONDENSED}
            checked={LayoutType.CONDENSED === type}
            control={control}
            onClick={() => dispatch(setType(LayoutType.CONDENSED))}
          />
          <FormInput.Check
            type="radio"
            name="type"
            title="Örtülü"
            classNameSubContainer="form-switch"
            value={LayoutType.OVERLAP}
            checked={LayoutType.OVERLAP === type}
            control={control}
            onClick={() => dispatch(setType(LayoutType.OVERLAP))}
          />
          <FormInput.Check
            type="radio"
            name="type"
            title="Dikey"
            classNameSubContainer="form-switch"
            value={LayoutType.VERTICAL}
            checked={LayoutType.VERTICAL === type}
            control={control}
            onClick={() => dispatch(setType(LayoutType.VERTICAL))}
          />
          <FormInput.Check
            type="radio"
            name="type"
            title="Birleşik"
            classNameSubContainer="form-switch"
            value={LayoutType.COMBINED}
            checked={LayoutType.COMBINED === type}
            control={control}
            onClick={() => dispatch(setType(LayoutType.COMBINED))}
          />
          <hr />
          <h4>Menü Genişliği</h4>
          <FormInput.Check
            type="radio"
            name="width"
            title="Varsayılan"
            classNameSubContainer="form-switch"
            value={LayoutWidth.DEFAULT}
            checked={LayoutWidth.DEFAULT === width}
            control={control}
            onClick={() => dispatch(setWidth(LayoutWidth.DEFAULT))}
          />
          <FormInput.Check
            type="radio"
            name="width"
            title="Geniş"
            classNameSubContainer="form-switch"
            value={LayoutWidth.FLUID}
            checked={LayoutWidth.FLUID === width}
            control={control}
            onClick={() => dispatch(setWidth(LayoutWidth.FLUID))}
          />
          <FormInput.Check
            type="radio"
            name="width"
            title="Ortalı"
            classNameSubContainer="form-switch"
            value={LayoutWidth.BOXED}
            checked={LayoutWidth.BOXED === width}
            control={control}
            onClick={() => dispatch(setWidth(LayoutWidth.BOXED))}
          />
          <hr />
          <h4>Menü Rengi</h4>
          <FormInput.Check
            type="radio"
            name="color"
            title="Varsayılan"
            classNameSubContainer="form-switch"
            value={LayoutColor.DEFAULT}
            checked={LayoutColor.DEFAULT === color}
            control={control}
            onClick={() => dispatch(setColor(LayoutColor.DEFAULT))}
          />
          <FormInput.Check
            type="radio"
            name="color"
            title="Koyu"
            classNameSubContainer="form-switch"
            value={LayoutColor.DARK}
            checked={LayoutColor.DARK === color}
            control={control}
            onClick={() => dispatch(setColor(LayoutColor.DARK))}
          />
          {[LayoutType.VERTICAL, LayoutType.COMBINED].includes(type) && (
            <FormInput.Check
              type="radio"
              name="color"
              title="Şeffaf"
              classNameSubContainer="form-switch"
              value={LayoutColor.TRANSPARENT}
              checked={LayoutColor.TRANSPARENT === color}
              control={control}
              onClick={() => dispatch(setColor(LayoutColor.TRANSPARENT))}
            />
          )}
          <hr />
          <h4>Menü Pozisyonu</h4>
          <FormInput.Check
            type="radio"
            name="position"
            title="Kaydırılabilir"
            classNameSubContainer="form-switch"
            value={LayoutPosition.DEFAULT}
            checked={LayoutPosition.DEFAULT === position}
            control={control}
            onClick={() => dispatch(setPosition(LayoutPosition.DEFAULT))}
          />
          <FormInput.Check
            type="radio"
            name="position"
            title="Sabit"
            classNameSubContainer="form-switch"
            value={LayoutPosition.STICKY}
            checked={LayoutPosition.STICKY === position}
            control={control}
            onClick={() => dispatch(setPosition(LayoutPosition.STICKY))}
          />
          <hr />
          <h4>Menü Yönü</h4>
          <FormInput.Check
            type="radio"
            name="languageMode"
            title="LTR"
            classNameSubContainer="form-switch"
            value={LayoutLanguageMode.LTR}
            checked={LayoutLanguageMode.LTR === languageMode}
            control={control}
            onClick={() => dispatch(setLanguageMode(LayoutLanguageMode.LTR))}
          />
          <FormInput.Check
            type="radio"
            name="languageMode"
            title="RTL"
            classNameSubContainer="form-switch"
            value={LayoutLanguageMode.RTL}
            checked={LayoutLanguageMode.RTL === languageMode}
            control={control}
            onClick={() => dispatch(setLanguageMode(LayoutLanguageMode.RTL))}
          />
          {[LayoutType.VERTICAL, LayoutType.COMBINED].includes(type) && (
            <>
              <hr />
              <h4>Dikey Menü Konumu</h4>
              <FormInput.Check
                type="radio"
                name="verticalLocation"
                title="Sol"
                classNameSubContainer="form-switch"
                value={LayoutVerticalLocation.LEFT}
                checked={LayoutVerticalLocation.LEFT === verticalLocation}
                control={control}
                onClick={() => dispatch(setVerticalLocation(LayoutVerticalLocation.LEFT))}
              />
              <FormInput.Check
                type="radio"
                name="verticalLocation"
                title="Sağ"
                classNameSubContainer="form-switch"
                value={LayoutVerticalLocation.RIGHT}
                checked={LayoutVerticalLocation.RIGHT === verticalLocation}
                control={control}
                onClick={() => dispatch(setVerticalLocation(LayoutVerticalLocation.RIGHT))}
              />
            </>
          )}
          <hr />
          <div className="d-flex flex-column gap-2">
            <Button type="submit">Kaydet</Button>
            <Button variant="danger" onClick={reset}>
              Sıfırla
            </Button>
          </div>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default ThemeOffcanvas;
