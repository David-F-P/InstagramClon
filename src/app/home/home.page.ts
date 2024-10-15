import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  username: string;
  avatar: string;
  image: string;
  content: string;
  likes: number; // Número de "Me gusta"
  comments: number; // Número de comentarios
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  stories = [
    { username: 'user1', avatar: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t1.15752-9/462550271_3948328375485481_4939847637651403687_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEfttq0IJoiljZ2Dy7wYy1e87FkoBpAeGDzsWSgGkB4YHr8BujHAIPpVHKiYobCprHeJ2MQxSt0A2VSiG8sSkSS&_nc_ohc=RiSD8JGfQxkQ7kNvgFYLauV&_nc_ht=scontent.fjal3-1.fna&_nc_gid=AqD4PYgwUu6VSXrX8toOdXb&oh=03_Q7cD1QGgINW76eJRlneUj_QMWsbE_ZXAIGJi4eP1kooSwJ_hNA&oe=6735A10D' },
    { username: 'user2', avatar: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t1.15752-9/429422032_783559146606111_6966607608006859106_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEXmt76d_II4tKden975QbehaJzAvlv2SSFonMC-W_ZJLc60H4u9q44dTp8162pAa1y_AV0x3hHNSXWfa8QGwOZ&_nc_ohc=bdjauMkLZfwQ7kNvgEzbmkt&_nc_ht=scontent.fjal3-1.fna&_nc_gid=AqD4PYgwUu6VSXrX8toOdXb&oh=03_Q7cD1QFB8MRmlz-hP0yZtmk9FmRxj5bTFEgQLPhacJk7--TqHQ&oe=6735BC89' },
    { username: 'user3', avatar: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t1.15752-9/462639393_1589177375142876_1766195301224262807_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE09YZSDWWQe1ZHu3mROk11BQPImTpTBPAFA8iZOlME8BvzyHfKfwEFpN9Nhgj6mAbJKemYw4hmdTz7a21ivlan&_nc_ohc=e6SKbyT-taoQ7kNvgHrAsv3&_nc_ht=scontent.fjal3-1.fna&_nc_gid=ApuJiSQMyjCw3z1GPK_ZDWu&oh=03_Q7cD1QFFmom9n8k8EVsKPr7zd91clM7hIu93uiFqeqpIpnlLOg&oe=6735B8C7' },
    { username: 'user4', avatar: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t1.15752-9/433246489_907244951141929_4058817827837479971_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFNGrkRRvjw_aztM2lta7yecZ8BjOw9PsxxnwGM7D0-zIx4iWMDb65T0KwHWs5ZkQHrimTJU-OmXZO248IFyzay&_nc_ohc=JFxURe8wPEEQ7kNvgEepwoo&_nc_ht=scontent.fjal3-1.fna&_nc_gid=A3HAU-WBiuaESVU_YRxnsDj&oh=03_Q7cD1QEoJ6s5XyKFMJf1oJRyc_UZJo-kppZ30_sdNGUx2N_yUA&oe=6735B3A6' },
  ];

  posts: Post[] = [
    {
      id: 1,
      username: 'usuario1',
      avatar: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t39.30808-6/456866246_2137719356627735_6409377008106476117_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=bd9a62&_nc_eui2=AeG_y6p9RH97zv7-6rGz1Gd2DnmBSu9LQ80OeYFK70tDzR0GBdM2De3-idzOzmzzCYvusSPeHKcyJ5SuL_nqnbtB&_nc_ohc=BjVsI032g0YQ7kNvgE6zF4v&_nc_ht=scontent.fjal3-1.fna&_nc_gid=AKIf_KBTqP_ixPaFVrR5bfg&oh=00_AYBMmkGj9NTHtzYbzfQ03E6emc50zfVT7Y5zZ07JLDu1eQ&oe=6714152B',
      image: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t39.30808-6/461609743_927215872597994_7753246430253683503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5T0IcvEmIQGhci4vGF4qZmBv3pF0LzqCYG_ekXQvOoJiiEFYmJEtUD_68Li1KeRWZVdW7_Ur2eB4xZon9yu0M&_nc_ohc=nuYmrQ0hjXEQ7kNvgGPzccV&_nc_ht=scontent.fjal3-1.fna&_nc_gid=AGbYTmpneKncwAMZfeO-ac3&oh=00_AYCEs77w_7HpdXrmg7HAkLpOA2_qAyK1Typrs8tQwjLktw&oe=6713EA6B',
      content: '¡Qué buen día!',
      likes: 10, // Inicializando likes
      comments: 2, // Inicializando comentarios
    },
    {
      id: 2,
      username: 'usuario2',
      avatar: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t1.15752-9/462563869_1054169002680277_7751056550211882217_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeFVPi9CP3yGw_tvD2z-L4HYMPNPs6wNEDEw80-zrA0QMayRBWlajKlZHu_pb5fZqAxGM-E5que1fYgdQhmPPxOb&_nc_ohc=TkFgL8_FdhgQ7kNvgGVU-pL&_nc_ht=scontent.fjal3-1.fna&_nc_gid=AUk0fg522I6vWfr1yIdv35Z&oh=03_Q7cD1QHpPTiQ5irnORB1dAZOI1g9M4xAYwxa6bN_e_LBWUuM8w&oe=67358820',
      image: 'https://scontent.fjal3-1.fna.fbcdn.net/v/t39.30808-6/461655791_923484506304464_4289536723766534609_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF5vuShSoJSZn_Z6XvMCvqHRns5pPQ0X35Gezmk9DRfflNPgihFn74qtTpysc5hWShqX3VgesuimN7nHJZ75YbW&_nc_ohc=f24C66bS_G0Q7kNvgEIj3hz&_nc_ht=scontent.fjal3-1.fna&_nc_gid=A2ONEbz_L2o60gHElAC0m_h&oh=00_AYDU0VMROCqM-1YBTRcC-IIGsI6H57iyO6q-BqmCklZhsw&oe=6714067C',
      content: 'Amo la naturaleza',
      likes: 5,
      comments: 1,
    },
  ];

  newPostContent: string = '';

  addPost() {
    if (this.newPostContent.trim() !== '') {
      const newPost: Post = {
        id: this.posts.length + 1,
        username: 'nuevo_usuario',
        avatar: 'https://i.pravatar.cc/150?img=7',
        image: 'https://picsum.photos/400/300',
        content: this.newPostContent,
        likes: 0, // Inicializando likes para el nuevo post
        comments: 0, // Inicializando comentarios para el nuevo post
      };
      this.posts.push(newPost);
      this.newPostContent = '';
    }
  }
}
