  export const filteredTasks = (tasksInit, params, filtersInit  ) => tasksInit
                        .filter( path => {
                          if(params?.currentPath) {
                            const opened = !!path.finish_by;

                            switch (params.currentPath) {
                              case 'opened': {
                                return !opened;
                              }
                              case 'finished':
                                return opened;
                              default:
                                break;
                            }
                          }

                          return true;
                        })
                        .filter( opt => {
                          if(params?.currentPath === 'opened') {
                            const option = params?.opt;

                            if(option) {
                              const cerrent = new Date(opt.deadline) < new Date();

                              switch (option) {
                                case 'expired':
                                  return cerrent;
                                case 'active':
                                  return !cerrent;
                                default:
                                  break;
                              }
                            }
                          }

                          return true;
                        })
                        .filter( mark => {
                          if( !!filtersInit.marks ) {
                            return mark.marks.some( x => x.includes(filtersInit.marks));
                          }

                          return true;
                        })
                        .sort((a,b) =>  {
                            if(filtersInit.sort === 'users') {
                              return b.users.length - a.users.length;
                            }
                            return new Date(a[filtersInit.sort]) - new Date(b[filtersInit.sort]);
                        })
                        .map((y,idx)=> ({...y, n:idx+1}));
