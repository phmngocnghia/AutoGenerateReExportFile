import {isFolderContainExport} from './isFolderContainExport'

export const getFolderNamesInDestinationContainExport = ({
  folderNames,
  destinationPath,
  indexFileExt,
}: {
  folderNames: string[],
  destinationPath: string,
  indexFileExt: string
}):Promise<string[]> => 

   new Promise(async (resolve) => {
    const folderNamePromiseObjects = folderNames.map(folderName => ({
      folderName,
      promiseCheckIfFileContainExport: isFolderContainExport({
        folderName,
        destinationPath,
        indexFileExt
      }).then(value => {
        return value
      })
    }))

    // wait until all file in destination has been checked
    const promises = folderNamePromiseObjects.map(({promiseCheckIfFileContainExport})=>promiseCheckIfFileContainExport)
    const folderNamesReturnedByPromise = await Promise.all(promises)

    // folderNamesOfFileContainExport 
    const folderNamesOfFileConrainExport = folderNamesReturnedByPromise.filter(x => typeof x == 'string')
    
    
    resolve(folderNamesOfFileConrainExport)
  })
