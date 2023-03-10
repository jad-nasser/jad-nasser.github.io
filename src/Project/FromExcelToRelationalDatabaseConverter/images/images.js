import databaseDiagram from "./database-diagram.png";
import gui from "./app-start.png";
import resultFile from "./result-file.png";
import databaseDiagramBlur from "./blur/database-diagram-min.jpg";
import guiBlur from "./blur/app-start-min.jpg";
import resultFileBlur from "./blur/result-file-min.jpg";
const images = {
  databaseDiagram: {
    src: databaseDiagram,
    width: 1350,
    height: 693,
    blur: databaseDiagramBlur,
  },
  gui: { src: gui, width: 1366, height: 728, blur: guiBlur },
  resultFile: {
    src: resultFile,
    width: 1105,
    height: 576,
    blur: resultFileBlur,
  },
};
export default images;
