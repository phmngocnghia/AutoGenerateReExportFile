import * as path from 'path'
import {isFileContainExport} from './isFileContainExport'

export const isFolderContainExport = ({
  folderName,
  destinationPath,
  indexFileExt
}: {
  folderName: string,
  destinationPath: string,
  indexFileExt: string
}):Promise<string|null> => {
  return new Promise(async (resolve) => {
    try {
      // check if file is parsable
      if(await isFileContainExport({
        destinationPath: path.join(destinationPath, folderName),
        fileName: `index.${indexFileExt}`,
      })) {
        resolve(folderName)
      }
      
      resolve(null)
    } catch (err) {
      resolve(null)
    }
  })
}