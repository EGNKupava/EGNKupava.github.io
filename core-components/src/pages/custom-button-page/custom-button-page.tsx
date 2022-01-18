import { CustomButton } from '@alfalab/core-components/custom-button';

import "./custom-button-page.css";

const WHITE_CONTENT_COLORS = [
  "#FF8510",
  "linear-gradient(264.15deg, #FF42CA 0%, #FF8A00 100%)",
  "#FF45C3",
];
// const BLACK_CONTENT_COLORS = [
//   "#4AF2FD",
//   "linear-gradient(80.38deg, #4AF2FD 0%, #4AFD9C 100%)",
//   "#4AFDA2",
// ];

export const CustomButtonPage = () => (
      <div className="custom-button-page">
      <CustomButton backgroundColor="#FF45C3">Кнопка</CustomButton>
      <CustomButton backgroundColor="#4AF2FD" contentColor="black">
        Кнопка
      </CustomButton>

      {WHITE_CONTENT_COLORS.map((color) => (
          <CustomButton key={color} backgroundColor={color}>Кнопка</CustomButton>))}
      </div>
  );
