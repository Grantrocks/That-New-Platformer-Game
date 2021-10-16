// Map for the game
const dmap ='d                                                              d.'+
            'd                                                              d.'+
            'd                                                              d.'+
            'd                         c              ccc    p            c d.'+
            'd                         p    c         ccc       p         c d.'+
            'd                              p     c   ccc          p    p c d.'+
            'd              c                     p   ccc               p  cd.'+
            'd              p                                          p   cd.'+
            'd                              c s               c s     pp   cd.'+
            'd             c c        c     ppp          c    ppp   cppp   pd.'+
            'd             ppp        p                             pppp    d.'+
            'd      2             s             s   c    s     s   pppppsss d.'+
            'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';

const secmap = '                          c              ccc    p            c.'+
            '                          p    c         ccc       p         c  .'+
            '                               p     c   ccc          p    p c  .'+
            '               c                     p   ccc               p  c .'+
            '               p                                          p   c .'+
            '                               c s               c s     pp   c .'+
            '              c c        c     ppp          c    ppp   cppp   p .'+
            '              ppp        p                             pppp     .'+
            '  ccc  2             s             s   c    s     s   pppppsss  .'+
            'lbbbb  b    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';

const devil = 'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd                                                                                          .'+
              'd    2                                                                                     .'+
              'd           g    g      gggggggg                                                           .'+
              'd           g    g          g                                                              .'+
              'd           gggggg          g                                                              .'+
              'd        cccg    g  ccc     g                                                              .'+
              'd  pppppppppg    gppppppgggggggg                                                           .'+
              'd             p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p   p.'+
              'd                                                                                          .'+
              'd            sccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccsccscc.'+
              'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';
const df =     '                                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.'+
               '                                g                                                                                                           d.'+
               '                                g                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                               c                   ccccccccd.'+
               '                                d   2         ccccccccc           sccs                  c      sccc             p    cc             ccccccccd.'+
               '                                dpppppppp     ppppppppp    ppppppppppppppppp    pppp    p    pppppppppp   pppp    ppppppp    ppp    ppppppppd.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                dsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssd.'+
               '                                lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                d                                                                                                           d.'+
               '                                g                                                                                                           d.'+
               '                                g                                                                                                           d.'+
               '                                dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd.'+
               '                                dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd.'+
               '                                dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd.'+
               '                                lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';
const goingup = 'd                                                                                                                                                                                                                   d.'+
                'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                                                                                                                                                                                   d.'+
            'd                                                           s  cc  s                                              s        s c s       d      d     d     d     d                                                   d.'+
            'd                                                         pppppppppppp                                           ddd       ppppppp                                                                                  d.'+
            'd                                                     c                 d                                     p                                                                                                     d.'+
            'd                                                     p                   d                                c                                                     d                                                  d.'+
            'd                                                                                                          p                                                                                                        d.'+
            'd                                                 p                          d                                                                                                                                      d.'+
            'd                                                                                                       p                                                           d                                               d.'+
            'd                                             p                                 d                    c                                                                                                              d.'+
            'd                                                                                                    p                                                                 d                                            d.'+
            'd                                         p                                        d                                                                                                                                d.'+
            'd                                   cc                                                cccccccc    p                                                                      d                                          d.'+
            'd                                   pp                                               dddddddddd                                                                                                                     d.'+
            'd                             c                                                                                                                                           d                                         d.'+
            'd                             d                                                                                                                                                                                     d.'+
            'd                        pp                                                                                                                                                                                         d.'+
            'd                                                                                                                                                                           d                                       d.'+
            'd                   ccc                                                                                                                                                                                             d.'+
            'd                 ppppp                                                                                                                                                        d        c     c   ccccc     ccccccc d.'+
            'd           c                                                                                                                                                                           c     c   c     c   c      cd.'+
            'd          ddd                                                                                                                                                                          c     c   c    c    c      cd.'+
            'd                                                                                                                                                                                d      c     c   cc        c     c d.'+
            'd   2                                                                                                                                                                            d      ccccccc   c   c     ccccc   d.'+
            'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr.';
      
      
      
      
      
      
      
      /*'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.'+
            'd                                                                        d.'+
            'd    c     s     c                                                       d.'+
            'd 2  p     p     p     p                                                 d.'+
            'd p                                                                      d.'+
            'd       p                                                                d.'+
            'd                                                                        d.'+
            'd    p     p     p  c  p                             c       sc          d.'+
            'd p           p     p                                p      ppp          d.'+
            'd       c                                 c s    pp                      d.'+
            'd               c                         ppp                            d.'+
            'd    p     p     p     p              s                                  d.'+
            'd p     p           p                 p                                  d.'+
            'd                                p                                       d.'+
            'd ccccccccccc   s    s         c                                         d.'+
            'lbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbr';*/


            
