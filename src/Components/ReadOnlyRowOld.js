import React from 'react'
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function ReadOnlyRowOld({datamap, handleEditClick}) {
  return (
    <tr>
              <td className='space'>{datamap.index}</td>
              <td className='space'>{datamap.research}</td>
              <td className='space'> {datamap.employee}</td>
              <td className='spacei'>{datamap.display}</td>
              <td className='spacei'>{datamap.group}</td>
              <td className='spacei'><GrEdit onChange={handleEditClick}/></td>
              <td className='spacei'><MdDelete /></td>
    </tr>
  )
}

export default ReadOnlyRowOld