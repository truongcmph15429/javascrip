
import { reRender } from "../../../../utils/reRender";
import { getAll,remove } from "../../../API/category"; 
import NavAdmin from "../../../components/Navadmin";

const cateshow = {
    async  print(){
        const {data}= await getAll();
        
        return/*html*/`
        <!-- This example requires Tailwind CSS v2.0+ -->
        ${NavAdmin.print()}
       
        <a href="/admin/cateshow/add" class="sm:ml-3">
                            <button
                                type="button"
                                class="my-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Thêm mới Category
                            </button>
                        </a>
<div class="flex flex-col">
<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cate name
            </th>
           
           
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>

          </tr>
        </thead>
        ${data.map((post)=> /*html*/`
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${post.id}
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${post.cate_name}</div>
        <div class="text-sm text-gray-500"></div>
      </td>
          
      
            <td class="px-8 py-4 whitespace-nowrap text-sm font-medium">
              <a href="/admin/cateshow/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
              <button data-id=${post.id} class="btn btn-remove inline-block px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
            </td>
            
          </tr>

          <!-- More people... -->
        </tbody>
        `
            
    ).join("")}
      </table>
    </div>
  </div>
</div>
</div>
        `;
    },
    aftersubmit(){
        const cate = document.querySelectorAll(".btn");
        cate.forEach((btn)=>{
            btn.addEventListener("click",(e)=>{
                e.preventDefault();
                const dataid = (btn.dataset.id);
                const confirm = window.confirm("Bạn có muốn xóa hay không");
                if(confirm){
                    remove(dataid).then(reRender("#app",cateshow));
                }
            
            });
        });
    }
};
export default cateshow;