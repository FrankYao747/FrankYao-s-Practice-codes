﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstWinFormsApp.Interfaces
{
    public interface IUser
    {
        public string UserName { get; set; }
        void SayHello();

    }
}
